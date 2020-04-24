package com.oeco.controllers.repository;

import com.oeco.controllers.dto.CaseModelDTO;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CaseRepository extends MongoRepository<CaseModelDTO, String> {
}
