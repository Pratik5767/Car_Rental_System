package com.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.dto.BookACarDto;
import com.project.enums.BookCarStatus;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Data
public class BookACar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date fromDate;

    private Date toDate;

    private Long days;

    private Long amount;

    private BookCarStatus bookCarStatus;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "car_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Car car;

    public BookACarDto getBookACarDto() {
        BookACarDto dto = new BookACarDto();
        dto.setId(id);
        dto.setFromDate(fromDate);
        dto.setToDate(toDate);
        dto.setDays(days);
        dto.setAmount(amount);
        dto.setBookCarStatus(bookCarStatus);
        dto.setEmail(user.getEmail());
        dto.setUserName(user.getName());
        dto.setUserId(user.getId());
        return dto;
    }
}