package com.oeco.controllers.dto;

import java.io.Serializable;

public class TherapySupportDTO implements Serializable {
    public Boolean oxygenAdded;
    public Boolean oxygenRemoved;
    public Boolean mechanicalVentilationIntubation;
    public Boolean mechanicalVentilationExtubation;
    public Boolean ecmo;
    public Boolean dialysisYes;
    public Boolean dialysisNo;
    public Boolean dialysisPreexisting;

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

    @Override
    public String toString() {
        return "TherapySupportDTO{" +
                "oxygenAdded=" + oxygenAdded +
                ", oxygenRemoved=" + oxygenRemoved +
                ", mechanicalVentilationIntubation=" + mechanicalVentilationIntubation +
                ", mechanicalVentilationExtubation=" + mechanicalVentilationExtubation +
                ", ecmo=" + ecmo +
                ", dialysisYes=" + dialysisYes +
                ", dialysisNo=" + dialysisNo +
                ", dialysisPreexisting=" + dialysisPreexisting +
                '}';
    }
}
