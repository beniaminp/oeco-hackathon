package com.oeco.controllers.dto;

import java.util.List;

public class RequestData {
    public List<CaseModelDTO> data;

    public List<CaseModelDTO> getData() {
        return data;
    }

    public void setData(List<CaseModelDTO> data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "RequestData{" +
                "data=" + data +
                '}';
    }
}
