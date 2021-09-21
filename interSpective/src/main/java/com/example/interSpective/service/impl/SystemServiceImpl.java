package com.example.interSpective.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.interSpective.exception.ResourceNotFoundException;
import com.example.interSpective.model.MadSadGlad;
import com.example.interSpective.repository.MadSadGladRepository;
import com.example.interSpective.service.SystemService;

@Service
public class SystemServiceImpl implements SystemService{

	private MadSadGladRepository madSadGladRepository;
	
	
	public SystemServiceImpl(MadSadGladRepository madSadGladRepository) {
		super();
		this.madSadGladRepository = madSadGladRepository;
		
	}
	
	@Override
	public List<MadSadGlad> getAllMadSadGlad() {
		return madSadGladRepository.findAll();
	}

	@Override
	public MadSadGlad createMadSadGlad(MadSadGlad madSadGlad) {
		return madSadGladRepository.save(madSadGlad);
	}

	@Override
	public MadSadGlad getMadSadGladbyID(Long id) {
		return madSadGladRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("MadSadGlad post you searched could not be found with id:" + id));
	}

	@Override
	public MadSadGlad updateMadSadGlad(Long id, MadSadGlad madSadGlad) {
		MadSadGlad existingMadSadGlad = madSadGladRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("MadSadGlad post does not exist with id:"+ id));
		
		existingMadSadGlad.setMadList(madSadGlad.getMadList());
		existingMadSadGlad.setSadList(madSadGlad.getSadList());
		existingMadSadGlad.setGladList(madSadGlad.getGladList());
		existingMadSadGlad.setNotes(madSadGlad.getNotes());
		
		madSadGladRepository.save(existingMadSadGlad);
		return existingMadSadGlad;
	}

	@Override
	public void deleteMadSadGlad(Long id) {
		madSadGladRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("MadSadGlad does not exist with id: "+ id));		
		
		madSadGladRepository.deleteById(id);		
	}



}
