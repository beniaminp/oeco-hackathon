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
    public Boolean oxygenAdded;
    public Boolean oxygenRemoved;
    public Boolean mechanicalVentilationIntubation;
    public Boolean mechanicalVentilationExtubation;
    public Boolean ecmo;
    public Boolean dialysisYes;
    public Boolean dialysisNo;
    public Boolean dialysisPreexisting;
    public Boolean noSymptoms;
    public Boolean temperature;
    public Boolean soreThroat;
    public Boolean dryCough;
    public Boolean fatigue;
    public Boolean nasalCongestion;
    public Boolean lossOfSmell;
    public Boolean lossOfTaste;
    public Boolean fever;
    public Boolean sputumProduction;
    public Boolean shortnessOfBreath;
    public Boolean myalgia;
    public Boolean headaches;
    public Boolean chills;
    public Boolean pleauriticPain;
    public Boolean diarrhea;
    public Boolean dyspnoea;
    public Boolean severeRespiratoryInsufficiency;
    public Boolean dermatologicLesion;

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

    public Boolean getOxygenAdded() {
        return oxygenAdded;
    }

    public void setOxygenAdded(Boolean oxygenAdded) {
        this.oxygenAdded = oxygenAdded;
    }

    public Boolean getOxygenRemoved() {
        return oxygenRemoved;
    }

    public void setOxygenRemoved(Boolean oxygenRemoved) {
        this.oxygenRemoved = oxygenRemoved;
    }

    public Boolean getMechanicalVentilationIntubation() {
        return mechanicalVentilationIntubation;
    }

    public void setMechanicalVentilationIntubation(Boolean mechanicalVentilationIntubation) {
        this.mechanicalVentilationIntubation = mechanicalVentilationIntubation;
    }

    public Boolean getMechanicalVentilationExtubation() {
        return mechanicalVentilationExtubation;
    }

    public void setMechanicalVentilationExtubation(Boolean mechanicalVentilationExtubation) {
        this.mechanicalVentilationExtubation = mechanicalVentilationExtubation;
    }

    public Boolean getEcmo() {
        return ecmo;
    }

    public void setEcmo(Boolean ecmo) {
        this.ecmo = ecmo;
    }

    public Boolean getDialysisYes() {
        return dialysisYes;
    }

    public void setDialysisYes(Boolean dialysisYes) {
        this.dialysisYes = dialysisYes;
    }

    public Boolean getDialysisNo() {
        return dialysisNo;
    }

    public void setDialysisNo(Boolean dialysisNo) {
        this.dialysisNo = dialysisNo;
    }

    public Boolean getDialysisPreexisting() {
        return dialysisPreexisting;
    }

    public void setDialysisPreexisting(Boolean dialysisPreexisting) {
        this.dialysisPreexisting = dialysisPreexisting;
    }

    public Boolean getNoSymptoms() {
        return noSymptoms;
    }

    public void setNoSymptoms(Boolean noSymptoms) {
        this.noSymptoms = noSymptoms;
    }

    public Boolean getTemperature() {
        return temperature;
    }

    public void setTemperature(Boolean temperature) {
        this.temperature = temperature;
    }

    public Boolean getSoreThroat() {
        return soreThroat;
    }

    public void setSoreThroat(Boolean soreThroat) {
        this.soreThroat = soreThroat;
    }

    public Boolean getDryCough() {
        return dryCough;
    }

    public void setDryCough(Boolean dryCough) {
        this.dryCough = dryCough;
    }

    public Boolean getFatigue() {
        return fatigue;
    }

    public void setFatigue(Boolean fatigue) {
        this.fatigue = fatigue;
    }

    public Boolean getNasalCongestion() {
        return nasalCongestion;
    }

    public void setNasalCongestion(Boolean nasalCongestion) {
        this.nasalCongestion = nasalCongestion;
    }

    public Boolean getLossOfSmell() {
        return lossOfSmell;
    }

    public void setLossOfSmell(Boolean lossOfSmell) {
        this.lossOfSmell = lossOfSmell;
    }

    public Boolean getLossOfTaste() {
        return lossOfTaste;
    }

    public void setLossOfTaste(Boolean lossOfTaste) {
        this.lossOfTaste = lossOfTaste;
    }

    public Boolean getFever() {
        return fever;
    }

    public void setFever(Boolean fever) {
        this.fever = fever;
    }

    public Boolean getSputumProduction() {
        return sputumProduction;
    }

    public void setSputumProduction(Boolean sputumProduction) {
        this.sputumProduction = sputumProduction;
    }

    public Boolean getShortnessOfBreath() {
        return shortnessOfBreath;
    }

    public void setShortnessOfBreath(Boolean shortnessOfBreath) {
        this.shortnessOfBreath = shortnessOfBreath;
    }

    public Boolean getMyalgia() {
        return myalgia;
    }

    public void setMyalgia(Boolean myalgia) {
        this.myalgia = myalgia;
    }

    public Boolean getHeadaches() {
        return headaches;
    }

    public void setHeadaches(Boolean headaches) {
        this.headaches = headaches;
    }

    public Boolean getChills() {
        return chills;
    }

    public void setChills(Boolean chills) {
        this.chills = chills;
    }

    public Boolean getPleauriticPain() {
        return pleauriticPain;
    }

    public void setPleauriticPain(Boolean pleauriticPain) {
        this.pleauriticPain = pleauriticPain;
    }

    public Boolean getDiarrhea() {
        return diarrhea;
    }

    public void setDiarrhea(Boolean diarrhea) {
        this.diarrhea = diarrhea;
    }

    public Boolean getDyspnoea() {
        return dyspnoea;
    }

    public void setDyspnoea(Boolean dyspnoea) {
        this.dyspnoea = dyspnoea;
    }

    public Boolean getSevereRespiratoryInsufficiency() {
        return severeRespiratoryInsufficiency;
    }

    public void setSevereRespiratoryInsufficiency(Boolean severeRespiratoryInsufficiency) {
        this.severeRespiratoryInsufficiency = severeRespiratoryInsufficiency;
    }

    public Boolean getDermatologicLesion() {
        return dermatologicLesion;
    }

    public void setDermatologicLesion(Boolean dermatologicLesion) {
        this.dermatologicLesion = dermatologicLesion;
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
