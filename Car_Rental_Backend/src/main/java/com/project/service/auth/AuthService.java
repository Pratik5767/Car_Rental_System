package com.project.service.auth;

import com.project.dto.SignUpRequest;
import com.project.dto.UserDto;

public interface AuthService {
    UserDto createCustomer(SignUpRequest signUpRequest);

    boolean hasCustomerWithEmail(String email);
}