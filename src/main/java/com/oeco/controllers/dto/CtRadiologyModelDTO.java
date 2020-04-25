package com.oeco.controllers.dto;

import java.io.Serializable;

public class CtRadiologyModelDTO implements Serializable {
    public Integer hazyIncreasedOpacities;
    public Integer consolidation;
    public Integer crazyPavingPattern;
    public Integer thickenedInterlobularSepta;
    public Integer airBronchogramSign;
    public Integer bronchiectasis;
    public Integer pleuralThickening;
    public Integer pneumothorax;
    public Integer fibrousStripes;

    //Other Localization: Affected lung lobes
    public Integer bilateral;
    public Integer multilobar;
    public Integer emphasisOnLowerLobe;
    public Integer emphasisPeriphery;
    public Integer emphasisPosterior;

    // Further findings
    public Integer pleuralEffusion;
    public Integer pericardialEffusion;
    public Integer lymphadenopathy;
    public Integer vascularThickening;

    public Integer getHazyIncreasedOpacities() {
        return hazyIncreasedOpacities;
    }

    public void setHazyIncreasedOpacities(Integer hazyIncreasedOpacities) {
        this.hazyIncreasedOpacities = hazyIncreasedOpacities;
    }

    public Integer getConsolidation() {
        return consolidation;
    }

    public void setConsolidation(Integer consolidation) {
        this.consolidation = consolidation;
    }

    public Integer getCrazyPavingPattern() {
        return crazyPavingPattern;
    }

    public void setCrazyPavingPattern(Integer crazyPavingPattern) {
        this.crazyPavingPattern = crazyPavingPattern;
    }

    public Integer getThickenedInterlobularSepta() {
        return thickenedInterlobularSepta;
    }

    public void setThickenedInterlobularSepta(Integer thickenedInterlobularSepta) {
        this.thickenedInterlobularSepta = thickenedInterlobularSepta;
    }

    public Integer getAirBronchogramSign() {
        return airBronchogramSign;
    }

    public void setAirBronchogramSign(Integer airBronchogramSign) {
        this.airBronchogramSign = airBronchogramSign;
    }

    public Integer getBronchiectasis() {
        return bronchiectasis;
    }

    public void setBronchiectasis(Integer bronchiectasis) {
        this.bronchiectasis = bronchiectasis;
    }

    public Integer getPleuralThickening() {
        return pleuralThickening;
    }

    public void setPleuralThickening(Integer pleuralThickening) {
        this.pleuralThickening = pleuralThickening;
    }

    public Integer getPneumothorax() {
        return pneumothorax;
    }

    public void setPneumothorax(Integer pneumothorax) {
        this.pneumothorax = pneumothorax;
    }

    public Integer getFibrousStripes() {
        return fibrousStripes;
    }

    public void setFibrousStripes(Integer fibrousStripes) {
        this.fibrousStripes = fibrousStripes;
    }

    public Integer getBilateral() {
        return bilateral;
    }

    public void setBilateral(Integer bilateral) {
        this.bilateral = bilateral;
    }

    public Integer getMultilobar() {
        return multilobar;
    }

    public void setMultilobar(Integer multilobar) {
        this.multilobar = multilobar;
    }

    public Integer getEmphasisOnLowerLobe() {
        return emphasisOnLowerLobe;
    }

    public void setEmphasisOnLowerLobe(Integer emphasisOnLowerLobe) {
        this.emphasisOnLowerLobe = emphasisOnLowerLobe;
    }

    public Integer getEmphasisPeriphery() {
        return emphasisPeriphery;
    }

    public void setEmphasisPeriphery(Integer emphasisPeriphery) {
        this.emphasisPeriphery = emphasisPeriphery;
    }

    public Integer getEmphasisPosterior() {
        return emphasisPosterior;
    }

    public void setEmphasisPosterior(Integer emphasisPosterior) {
        this.emphasisPosterior = emphasisPosterior;
    }

    public Integer getPleuralEffusion() {
        return pleuralEffusion;
    }

    public void setPleuralEffusion(Integer pleuralEffusion) {
        this.pleuralEffusion = pleuralEffusion;
    }

    public Integer getPericardialEffusion() {
        return pericardialEffusion;
    }

    public void setPericardialEffusion(Integer pericardialEffusion) {
        this.pericardialEffusion = pericardialEffusion;
    }

    public Integer getLymphadenopathy() {
        return lymphadenopathy;
    }

    public void setLymphadenopathy(Integer lymphadenopathy) {
        this.lymphadenopathy = lymphadenopathy;
    }

    public Integer getVascularThickening() {
        return vascularThickening;
    }

    public void setVascularThickening(Integer vascularThickening) {
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
