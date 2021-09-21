package com.example.interSpective.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="madsadglad") 
public class MadSadGlad {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="madsadglad_ID")
		private long madsadglad_ID;
		
		@Column(name="madList")
		private String[] madList;
		
		@Column(name="sadList")
		private String[] sadList;
		
		@Column(name="gladList")
		private String[] gladList;
		
		@Column(name="actionList")
		private String[] actionList;
		
		@Column(name="notes")
		private String notes;
		
		@Column(name="rate")
		private double rate;
		
		

}
