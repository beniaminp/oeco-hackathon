package com.oeco.controllers.dto;

import java.io.Serializable;

public class CtRadiologyModelDTO implements Serializable {
    public Boolean hazyIncreasedOpacities;
    public Boolean consolidation;
    public Boolean crazyPavingPattern;
    public Boolean thickenedInterlobularSepta;
    public Boolean airBronchogramSign;
    public Boolean bronchiectasis;
    public Boolean pleuralThickening;
    public Boolean pneumothorax;
    public Boolean fibrousStripes;

    //Other Localization: Affected lung lobes
    public Boolean bilateral;
    public Boolean multilobar;
    public Boolean emphasisOnLowerLobe;
    public Boolean emphasisPeriphery;
    public Boolean emphasisPosterior;

    // Further findings
    public Boolean pleuralEffusion;
    public Boolean pericardialEffusion;
    public Boolean lymphadenopathy;
    public Boolean vascularThickening;

    public Boolean getHazyIncreasedOpacities() {
        return hazyIncreasedOpacities;
    }

    public void setHazyIncreasedOpacities(Boolean hazyIncreasedOpacities) {
        this.hazyIncreasedOpacities = hazyIncreasedOpacities;
    }

    public Boolean getConsolidation() {
        return consolidation;
    }

    public void setConsolidation(Boolean consolidation) {
        this.consolidation = consolidation;
    }

    public Boolean getCrazyPavingPattern() {
        return crazyPavingPattern;
    }

    public void setCrazyPavingPattern(Boolean crazyPavingPattern) {
        this.crazyPavingPattern = crazyPavingPattern;
    }

    public Boolean getThickenedInterlobularSepta() {
        return thickenedInterlobularSepta;
    }

    public void setThickenedInterlobularSepta(Boolean thickenedInterlobularSepta) {
        this.thickenedInterlobularSepta = thickenedInterlobularSepta;
    }

    public Boolean getAirBronchogramSign() {
        return airBronchogramSign;
    }

    public void setAirBronchogramSign(Boolean airBronchogramSign) {
        this.airBronchogramSign = airBronchogramSign;
    }

    public Boolean getBronchiectasis() {
        return bronchiectasis;
    }

    public void setBronchiectasis(Boolean bronchiectasis) {
        this.bronchiectasis = bronchiectasis;
    }

    public Boolean getPleuralThickening() {
        return pleuralThickening;
    }

    public void setPleuralThickening(Boolean pleuralThickening) {
        this.pleuralThickening = pleuralThickening;
    }

    public Boolean getPneumothorax() {
        return pneumothorax;
    }

    public void setPneumothorax(Boolean pneumothorax) {
        this.pneumothorax = pneumothorax;
    }

    public Boolean getFibrousStripes() {
        return fibrousStripes;
    }

    public void setFibrousStripes(Boolean fibrousStripes) {
        this.fibrousStripes = fibrousStripes;
    }

    public Boolean getBilateral() {
        return bilateral;
    }

    public void setBilateral(Boolean bilateral) {
        this.bilateral = bilateral;
    }

    public Boolean getMultilobar() {
        return multilobar;
    }

    public void setMultilobar(Boolean multilobar) {
        this.multilobar = multilobar;
    }

    public Boolean getEmphasisOnLowerLobe() {
        return emphasisOnLowerLobe;
    }

    public void setEmphasisOnLowerLobe(Boolean emphasisOnLowerLobe) {
        this.emphasisOnLowerLobe = emphasisOnLowerLobe;
    }

    public Boolean getEmphasisPeriphery() {
        return emphasisPeriphery;
    }

    public void setEmphasisPeriphery(Boolean emphasisPeriphery) {
        this.emphasisPeriphery = emphasisPeriphery;
    }

    public Boolean getEmphasisPosterior() {
        return emphasisPosterior;
    }

    public void setEmphasisPosterior(Boolean emphasisPosterior) {
        this.emphasisPosterior = emphasisPosterior;
    }

    public Boolean getPleuralEffusion() {
        return pleuralEffusion;
    }

    public void setPleuralEffusion(Boolean pleuralEffusion) {
        this.pleuralEffusion = pleuralEffusion;
    }

    public Boolean getPericardialEffusion() {
        return pericardialEffusion;
    }

    public void setPericardialEffusion(Boolean pericardialEffusion) {
        this.pericardialEffusion = pericardialEffusion;
    }

    public Boolean getLymphadenopathy() {
        return lymphadenopathy;
    }

    public void setLymphadenopathy(Boolean lymphadenopathy) {
        this.lymphadenopathy = lymphadenopathy;
    }

    public Boolean getVascularThickening() {
        return vascularThickening;
    }

    public void setVascularThickening(Boolean vascularThickening) {
        this.vascularThickening = vascularThickening;
    }

    @Override
    public String toString() {
        return "CtRadiologyModelDTO{" +
                "hazyIncreasedOpacities=" + hazyIncreasedOpacities +
                ", consolidation=" + consolidation +
                ", crazyPavingPattern=" + crazyPavingPattern +
                ", thickenedInterlobularSepta=" + thickenedInterlobularSepta +
                ", airBronchogramSign=" + airBronchogramSign +
                ", bronchiectasis=" + bronchiectasis +
                ", pleuralThickening=" + pleuralThickening +
                ", pneumothorax=" + pneumothorax +
                ", fibrousStripes=" + fibrousStripes +
                ", bilateral=" + bilateral +
                ", multilobar=" + multilobar +
                ", emphasisOnLowerLobe=" + emphasisOnLowerLobe +
                ", emphasisPeriphery=" + emphasisPeriphery +
                ", emphasisPosterior=" + emphasisPosterior +
                ", pleuralEffusion=" + pleuralEffusion +
                ", pericardialEffusion=" + pericardialEffusion +
                ", lymphadenopathy=" + lymphadenopathy +
                ", vascularThickening=" + vascularThickening +
                '}';
    }
}
