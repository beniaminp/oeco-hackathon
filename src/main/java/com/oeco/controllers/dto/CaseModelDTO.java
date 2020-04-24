package com.oeco.controllers.dto;

import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.util.List;

public class CaseModelDTO implements Serializable {
    @Id
    public String patientCode;
    public Double yearOfBirth;
    public Double sex;
    public String state;
    public Double firstPositiveDate;
    public String firstTestType;
    public List<Double> previousInfections;
    public Double lastCovidPositiveTest;
    public String lastTestType;
    public List<ExistingConditionsDTO> existingConditions;
    public Double hospitalAdmission;
    public Double hospitalRelease;
    public Double outcomeDate;
    public Double outcomeType;
    public List<DetailOnProgressionDTO> detailsOnProgression;

    public String getPatientCode() {
        return patientCode;
    }

    public void setPatientCode(String patientCode) {
        this.patientCode = patientCode;
    }

    public Double getYearOfBirth() {
        return yearOfBirth;
    }

    public void setYearOfBirth(Double yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }

    public Double getSex() {
        return sex;
    }

    public void setSex(Double sex) {
        this.sex = sex;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Double getFirstPositiveDate() {
        return firstPositiveDate;
    }

    public void setFirstPositiveDate(Double firstPositiveDate) {
        this.firstPositiveDate = firstPositiveDate;
    }

    public String getFirstTestType() {
        return firstTestType;
    }

    public void setFirstTestType(String firstTestType) {
        this.firstTestType = firstTestType;
    }

    public List<Double> getPreviousInfections() {
        return previousInfections;
    }

    public void setPreviousInfections(List<Double> previousInfections) {
        this.previousInfections = previousInfections;
    }

    public Double getLastCovidPositiveTest() {
        return lastCovidPositiveTest;
    }

    public void setLastCovidPositiveTest(Double lastCovidPositiveTest) {
        this.lastCovidPositiveTest = lastCovidPositiveTest;
    }

    public String getLastTestType() {
        return lastTestType;
    }

    public void setLastTestType(String lastTestType) {
        this.lastTestType = lastTestType;
    }

    public List<ExistingConditionsDTO> getExistingConditions() {
        return existingConditions;
    }

    public void setExistingConditions(List<ExistingConditionsDTO> existingConditions) {
        this.existingConditions = existingConditions;
    }

    public Double getHospitalAdmission() {
        return hospitalAdmission;
    }

    public void setHospitalAdmission(Double hospitalAdmission) {
        this.hospitalAdmission = hospitalAdmission;
    }

    public Double getHospitalRelease() {
        return hospitalRelease;
    }

    public void setHospitalRelease(Double hospitalRelease) {
        this.hospitalRelease = hospitalRelease;
    }

    public Double getOutcomeDate() {
        return outcomeDate;
    }

    public void setOutcomeDate(Double outcomeDate) {
        this.outcomeDate = outcomeDate;
    }

    public Double getOutcomeType() {
        return outcomeType;
    }

    public void setOutcomeType(Double outcomeType) {
        this.outcomeType = outcomeType;
    }

    public List<DetailOnProgressionDTO> getDetailsOnProgression() {
        return detailsOnProgression;
    }

    public void setDetailsOnProgression(List<DetailOnProgressionDTO> detailsOnProgression) {
        this.detailsOnProgression = detailsOnProgression;
    }

    @Override
    public String toString() {
        return "CaseModelDTO{" +
                "patientCode='" + patientCode + '\'' +
                ", yearOfBirth=" + yearOfBirth +
                ", sex=" + sex +
                ", state='" + state + '\'' +
                ", firstPositiveDate=" + firstPositiveDate +
                ", firstTestType='" + firstTestType + '\'' +
                ", previousInfections=" + previousInfections +
                ", lastCovidPositiveTest=" + lastCovidPositiveTest +
                ", lastTestType='" + lastTestType + '\'' +
                ", existingConditions=" + existingConditions +
                ", hospitalAdmission=" + hospitalAdmission +
                ", hospitalRelease=" + hospitalRelease +
                ", outcomeDate=" + outcomeDate +
                ", outcomeType=" + outcomeType +
                ", detailsOnProgression=" + detailsOnProgression +
                '}';
    }
}
