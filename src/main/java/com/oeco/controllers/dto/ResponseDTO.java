package com.oeco.controllers.dto;

import java.io.Serializable;
import java.util.List;

public class ResponseDTO implements Serializable {
    List<CaseModelDTO> caseModelDTOList;
    Object data;

    public List<CaseModelDTO> getCaseModelDTOList() {
        return caseModelDTOList;
    }

    public void setCaseModelDTOList(List<CaseModelDTO> caseModelDTOList) {
        this.caseModelDTOList = caseModelDTOList;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "ResponseDTO{" +
                "caseModelDTOList=" + caseModelDTOList +
                ", data='" + data + '\'' +
                '}';
    }
}
