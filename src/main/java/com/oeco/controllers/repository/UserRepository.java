package com.oeco.controllers.repository;

import com.oeco.controllers.dto.auth.UserDTO;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserDTO, String> {
}
