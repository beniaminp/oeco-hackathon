package com.oeco.controllers.dto;

import java.io.Serializable;

public class DrugsDTO implements Serializable {
    public String name;
    public Double times;
    public String doses;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getTimes() {
        return times;
    }

    public void setTimes(Double times) {
        this.times = times;
    }

    public String getDoses() {
        return doses;
    }

    public void setDoses(String doses) {
        this.doses = doses;
    }

    @Override
    public String toString() {
        return "DrugsDTO{" +
                "name='" + name + '\'' +
                ", times=" + times +
                ", doses=" + doses +
                '}';
    }
}
