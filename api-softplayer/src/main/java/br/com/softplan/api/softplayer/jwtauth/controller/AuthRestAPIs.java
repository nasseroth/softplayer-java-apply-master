package br.com.softplan.api.softplayer.jwtauth.controller;

import javax.validation.Valid;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.api.softplayer.jwtauth.message.request.LoginForm;
import br.com.softplan.api.softplayer.jwtauth.message.request.SignUpForm;
import br.com.softplan.api.softplayer.jwtauth.message.response.JwtResponse;
import br.com.softplan.api.softplayer.jwtauth.model.Role;
import br.com.softplan.api.softplayer.jwtauth.model.RoleName;
import br.com.softplan.api.softplayer.jwtauth.model.User;
import br.com.softplan.api.softplayer.jwtauth.repository.RoleRepository;
import br.com.softplan.api.softplayer.jwtauth.repository.UserRepository;
import br.com.softplan.api.softplayer.jwtauth.security.jwt.JwtProvider;
import br.com.softplan.api.softplayer.util.DateUtil;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthRestAPIs {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;
    
    String password; 
    
    @PostMapping(value="/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
    	password = null;
    	password = loginRequest.getPassword();
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        String jwtUser = jwtProvider.getUserNameFromJwtToken(jwt);
        User u = new User();
        u = userRepository.findByName(jwtUser);
        
        return ResponseEntity.ok(new JwtResponse(jwt, u.getId()));
    }
    
    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
        if(userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<String>("Username is already taken!",
                    HttpStatus.BAD_REQUEST);
        }
 
        if(userRepository.existsByCpf(signUpRequest.getCpf())) {
            return new ResponseEntity<String>("O CPF já esta em uso!",
                    HttpStatus.BAD_REQUEST);
        }
 
        // Creating user's account
        System.out.println(signUpRequest.getUsername());
        System.out.println(signUpRequest.getEmail());
        System.out.println(signUpRequest.getPassword());
        User user = new User(signUpRequest.getUsername(), signUpRequest.getSexo(), signUpRequest.getEmail(),
        		signUpRequest.getDataNascimento(), signUpRequest.getNaturalidade(), signUpRequest.getNacionalidade(),
        		encoder.encode(signUpRequest.getPassword()), signUpRequest.getCpf(), new DateUtil().getDataHoraAtual(),
        		new DateUtil().getDataHoraAtual());
        
        //Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();
              Role userRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
                  .orElseThrow(() -> new RuntimeException("Cause: User Role not find."));
              roles.add(userRole);              
        user.setRoles(roles);
        userRepository.save(user);
        return null;
    }

    @GetMapping(value="/usuario/{id}")
    public Optional<User> getUsernameById(@PathVariable Long id) {
    	return userRepository.findById(id);
    }
    
    @PostMapping(value="/alterar")
    public User alterUsernameAndPassword(@RequestBody User user) {
    	user.setPassword(encoder.encode(password));
    	return userRepository.save(user);
    }

}