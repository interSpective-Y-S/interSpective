package com.example.interSpective.service;

import java.util.List;

import com.example.interSpective.model.MadSadGlad;

public interface SystemService {
	
	List<MadSadGlad> getAllMadSadGlad();
	MadSadGlad createMadSadGlad(MadSadGlad madSadGlad);
	MadSadGlad getMadSadGladbyID(Long id);
	MadSadGlad updateMadSadGlad(Long id, MadSadGlad madSadGlad);
	void deleteMadSadGlad(Long id);
}
