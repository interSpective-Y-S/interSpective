package com.example.interSpective.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.interSpective.model.MadSadGlad;
import com.example.interSpective.service.SystemService;


@CrossOrigin
@RestController
@RequestMapping
public class SystemController {

private SystemService systemService;
	
	public SystemController(SystemService systemService) {
		super();
		this.systemService = systemService;
	}
	
	@GetMapping("/madsadglad")
	public List<MadSadGlad> getAllFlights(){
		return systemService.getAllMadSadGlad();
	}
	
	@PostMapping("/madsadglad")
	public MadSadGlad createMadSadGlad(@RequestBody MadSadGlad madSadGlad){
		return systemService.createMadSadGlad(madSadGlad);
	}
	
	@GetMapping("/madsadglad/{id}")
	public ResponseEntity<MadSadGlad> getMadSadGladbyID(@PathVariable Long id){
		return new ResponseEntity<MadSadGlad>(systemService.getMadSadGladbyID(id), HttpStatus.OK);
	}
	
	@PutMapping("madsadglad/{id}")
	public ResponseEntity<MadSadGlad> updateMadSadGlad(@PathVariable Long id, @RequestBody MadSadGlad madSadGlad){
		return new ResponseEntity<MadSadGlad>(systemService.updateMadSadGlad(id, madSadGlad),HttpStatus.OK);
	}
	
	@DeleteMapping("madsadglad/{id}")
	public ResponseEntity<String> deleteMadSadGlad(@PathVariable Long id){
		systemService.deleteMadSadGlad(id);
		return new ResponseEntity<String>("Deleted successfully!", HttpStatus.OK);
	}
	

 	@GetMapping("/")
	public String index() {
	    return "Welcome to the home page!";
	  }

	
}
