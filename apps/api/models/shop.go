package models

import "time"

type Shop struct {
	ID          string    `json:"id"`
	Name        string    `json:"name"`
	Address     *string   `json:"address"`
	Latitude    float64   `json:"latitude"`
	Longitude   float64   `json:"longitude"`
	Description *string   `json:"description"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}
