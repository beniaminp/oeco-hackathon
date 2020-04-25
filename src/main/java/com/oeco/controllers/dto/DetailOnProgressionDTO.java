package com.oeco.controllers.dto;

import java.io.Serializable;
import java.util.List;

public class DetailOnProgressionDTO implements Serializable {
    public Double date;
    public List<DrugsDTO> drugs;
    public String conditions;
    public String symptoms;
    public BloodDataDTO bloodData;
    public CtRadiologyModelDTO radCT;
    public String radMRI;
    public String radCXR;
    public Long durationOfTherapy;
    public Long oxygenAdded;
    public Long oxygenRemoved;
    public Long mechanicalVentilationIntubation;
    public Long mechanicalVentilationExtubation;
    public Long ecmo;
    public Long dialysisYes;
    public Long dialysisNo;
    public Long dialysisPreexisting;
    public Integer noSymptoms;
    public Integer temperature;
    public Integer soreThroat;
    public Integer dryCough;
    public Integer fatigue;
    public Integer nasalCongestion;
    public Integer lossOfSmell;
    public Integer lossOfTaste;
    public Integer fever;
    public Integer sputumProduction;
    public Integer shortnessOfBreath;
    public Integer myalgia;
    public Integer headaches;
    public Integer chills;
    public Integer pleauriticPain;
    public Integer diarrhea;
    public Integer dyspnoea;
    public Integer severeRespiratoryInsufficiency;
    public Integer dermatologicLesion;

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

    public Long getDurationOfTherapy() {
        return durationOfTherapy;
    }

    public void setDurationOfTherapy(Long durationOfTherapy) {
        this.durationOfTherapy = durationOfTherapy;
    }

    public void setRadCXR(String radCXR) {
        this.radCXR = radCXR;
    }

    public Long getOxygenAdded() {
        return oxygenAdded;
    }

    public void setOxygenAdded(Long oxygenAdded) {
        this.oxygenAdded = oxygenAdded;
    }

    public Long getOxygenRemoved() {
        return oxygenRemoved;
    }

    public void setOxygenRemoved(Long oxygenRemoved) {
        this.oxygenRemoved = oxygenRemoved;
    }

    public Long getMechanicalVentilationIntubation() {
        return mechanicalVentilationIntubation;
    }

    public void setMechanicalVentilationIntubation(Long mechanicalVentilationIntubation) {
        this.mechanicalVentilationIntubation = mechanicalVentilationIntubation;
    }

    public Long getMechanicalVentilationExtubation() {
        return mechanicalVentilationExtubation;
    }

    public void setMechanicalVentilationExtubation(Long mechanicalVentilationExtubation) {
        this.mechanicalVentilationExtubation = mechanicalVentilationExtubation;
    }

    public Long getEcmo() {
        return ecmo;
    }

    public void setEcmo(Long ecmo) {
        this.ecmo = ecmo;
    }

    public Long getDialysisYes() {
        return dialysisYes;
    }

    public void setDialysisYes(Long dialysisYes) {
        this.dialysisYes = dialysisYes;
    }

    public Long getDialysisNo() {
        return dialysisNo;
    }

    public void setDialysisNo(Long dialysisNo) {
        this.dialysisNo = dialysisNo;
    }

    public Long getDialysisPreexisting() {
        return dialysisPreexisting;
    }

    public void setDialysisPreexisting(Long dialysisPreexisting) {
        this.dialysisPreexisting = dialysisPreexisting;
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
                ", durationOfTherapy=" + durationOfTherapy +
                ", oxygenAdded=" + oxygenAdded +
                ", oxygenRemoved=" + oxygenRemoved +
                ", mechanicalVentilationIntubation=" + mechanicalVentilationIntubation +
                ", mechanicalVentilationExtubation=" + mechanicalVentilationExtubation +
                ", ecmo=" + ecmo +
                ", dialysisYes=" + dialysisYes +
                ", dialysisNo=" + dialysisNo +
                ", dialysisPreexisting=" + dialysisPreexisting +
                ", noSymptoms=" + noSymptoms +
                ", temperature=" + temperature +
                ", soreThroat=" + soreThroat +
                ", dryCough=" + dryCough +
                ", fatigue=" + fatigue +
                ", nasalCongestion=" + nasalCongestion +
                ", lossOfSmell=" + lossOfSmell +
                ", lossOfTaste=" + lossOfTaste +
                ", fever=" + fever +
                ", sputumProduction=" + sputumProduction +
                ", shortnessOfBreath=" + shortnessOfBreath +
                ", myalgia=" + myalgia +
                ", headaches=" + headaches +
                ", chills=" + chills +
                ", pleauriticPain=" + pleauriticPain +
                ", diarrhea=" + diarrhea +
                ", dyspnoea=" + dyspnoea +
                ", severeRespiratoryInsufficiency=" + severeRespiratoryInsufficiency +
                ", dermatologicLesion=" + dermatologicLesion +
                '}';
    }
}
