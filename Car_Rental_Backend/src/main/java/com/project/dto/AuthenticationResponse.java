package com.project.dto;

import com.project.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;

    private UserRole userRole;

    private Long userId;
}
