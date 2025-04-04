package com.pureji.hyper.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HyperRobotContoller {
	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("/solo")
	public String solo() {
		return "solo";
	}
	
	@GetMapping("/user")
	public String user() {
		return "user";
	}
	
	@GetMapping("/arena")
	public String arena() {
		return "arena";
	}
	
}
