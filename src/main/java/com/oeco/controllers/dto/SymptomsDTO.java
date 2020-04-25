package com.oeco.controllers.dto;

import java.io.Serializable;

public class SymptomsDTO implements Serializable {
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
        return "SymptomsDTO{" +
                "noSymptoms=" + noSymptoms +
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
