package com.oeco.controllers.dto;

import java.io.Serializable;
import java.util.List;

public class DetailOnProgressionDTO implements Serializable {
    public Double date;
    public List<DrugsDTO> drugs;
    public String conditions;
    public String symptoms;
    public List<BloodDataDTO> bloodData;
    public String radCT;
    public String radMRI;
    public String radCXR;

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

    public String getConditions() {
        return conditions;
    }

    public void setConditions(String conditions) {
        this.conditions = conditions;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public List<BloodDataDTO> getBloodData() {
        return bloodData;
    }

    public void setBloodData(List<BloodDataDTO> bloodData) {
        this.bloodData = bloodData;
    }

    public String getRadCT() {
        return radCT;
    }

    public void setRadCT(String radCT) {
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

    @Override
    public String toString() {
        return "DetailOnProgressionDTO{" +
                "date=" + date +
                ", drugs=" + drugs +
                ", conditions='" + conditions + '\'' +
                ", symptoms='" + symptoms + '\'' +
                ", bloodData=" + bloodData +
                ", radCT='" + radCT + '\'' +
                ", radMRI='" + radMRI + '\'' +
                ", radCXR='" + radCXR + '\'' +
                '}';
    }

    public void setRadCXR(String radCXR) {
        this.radCXR = radCXR;
    }
}
