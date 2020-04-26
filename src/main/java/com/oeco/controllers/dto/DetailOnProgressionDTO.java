package com.oeco.controllers.dto;

import java.io.Serializable;
import java.util.List;

public class DetailOnProgressionDTO implements Serializable {
    public Double date;
    public List<DrugsDTO> drugs;
    public List<String> conditions;
    public BloodDataDTO bloodData;
    public CtRadiologyModelDTO radCT;
    public String radMRI;
    public String radCXR;
    public Long durationOfTherapy;
    public TherapySupportDTO therapySupport;
    public SymptomsDTO symptoms;

    public Double getDate() {
        return date;
    }

    public void setDate(Double date) {
        this.date = date;
    }

    public List<DrugsDTO> getDrugs() {
        return drugs;
    }

    public void setDrugs(List<DrugsDTO> drugs) {
        this.drugs = drugs;
    }

    public List<String> getConditions() {
        return conditions;
    }

    public void setConditions(List<String> conditions) {
        this.conditions = conditions;
    }

    public BloodDataDTO getBloodData() {
        return bloodData;
    }

    public void setBloodData(BloodDataDTO bloodData) {
        this.bloodData = bloodData;
    }

    public CtRadiologyModelDTO getRadCT() {
        return radCT;
    }

    public void setRadCT(CtRadiologyModelDTO radCT) {
        this.radCT = radCT;
    }

    public String getRadMRI() {
        return radMRI;
    }

    public void setRadMRI(String radMRI) {
        this.radMRI = radMRI;
    }

    public String getRadCXR() {
        return radCXR;
    }

    public void setRadCXR(String radCXR) {
        this.radCXR = radCXR;
    }

    public Long getDurationOfTherapy() {
        return durationOfTherapy;
    }

    public void setDurationOfTherapy(Long durationOfTherapy) {
        this.durationOfTherapy = durationOfTherapy;
    }

    public TherapySupportDTO getTherapySupport() {
        return therapySupport;
    }

    public void setTherapySupport(TherapySupportDTO therapySupport) {
        this.therapySupport = therapySupport;
    }

    public SymptomsDTO getsymptoms() {
        return symptoms;
    }

    public void setSymptoms(SymptomsDTO symptoms) {
        this.symptoms = symptoms;
    }

    @Override
    public String toString() {
        return "DetailOnProgressionDTO{" +
                "date=" + date +
                ", drugs=" + drugs +
                ", conditions=" + conditions +
                ", bloodData=" + bloodData +
                ", radCT=" + radCT +
                ", radMRI='" + radMRI + '\'' +
                ", radCXR='" + radCXR + '\'' +
                ", durationOfTherapy=" + durationOfTherapy +
                ", therapySupport=" + therapySupport +
                ", symptoms=" + symptoms +
                '}';
    }
}
