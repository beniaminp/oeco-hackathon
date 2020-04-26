package com.oeco.controllers.repository;

import com.oeco.controllers.dto.CaseModelDTO;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CaseRepository extends MongoRepository<CaseModelDTO, String> {
    List<CaseModelDTO> findAllByYearOfBirth(Double yearOfBirth);

    List<CaseModelDTO> findByYearOfBirthBetween(Double from, Double to);
}
