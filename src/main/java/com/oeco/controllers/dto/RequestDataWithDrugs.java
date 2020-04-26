package com.oeco.controllers.dto;

import java.util.List;

public class RequestDataWithDrugs {
    public List<CaseModelDTO> data;
    List<String> commonDrugs;

    public List<String> getCommonDrugs() {
        return commonDrugs;
    }

    public void setCommonDrugs(List<String> commonDrugs) {
        this.commonDrugs = commonDrugs;
    }

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
                ", commonDrugs=" + commonDrugs +
                '}';
    }
}
