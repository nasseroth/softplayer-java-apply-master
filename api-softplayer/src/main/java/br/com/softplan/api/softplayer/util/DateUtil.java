package br.com.softplan.api.softplayer.util;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
public class DateUtil {
	public String getDataHoraAtual() { 
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
		Date date = new Date();
		return dateFormat.format(date); 
	}
}
