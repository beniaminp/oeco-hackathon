package com.oeco.controllers.dto;

import java.io.Serializable;

public class DrugsDTO implements Serializable {
    public String name;
    public String doses;
    public Long times;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDoses() {
        return doses;
    }

    public void setDoses(String doses) {
        this.doses = doses;
    }

    public Long getTimes() {
        return times;
    }

    public void setTimes(Long times) {
        this.times = times;
    }

    @Override
    public String toString() {
        return "DrugsDTO{" +
                "name='" + name + '\'' +
                ", doses='" + doses + '\'' +
                ", times=" + times +
                '}';
    }
}
