package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;

@SpringBootApplication(exclude = {WebMvcAutoConfiguration.class})
public class ConsertoBackApplication {
	public static void main(String[] args) {
		SpringApplication.run(ConsertoBackApplication.class, args);
	}

}
