package repository

import (
	"database/sql"
	"log"

	"github.com/shohei-ojs/yorimichi/apps/api/models"
)

// ListShops はshopsテーブルから全てのお店情報を取得します
func ListShops(db *sql.DB) ([]models.Shop, error) {
	rows, err := db.Query("SELECT id, name, address, latitude, longitude, description, created_at, updated_at FROM shops ORDER BY created_at DESC")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var shops []models.Shop
	for rows.Next() {
		var s models.Shop
		if err := rows.Scan(&s.ID, &s.Name, &s.Address, &s.Latitude, &s.Longitude, &s.Description, &s.CreatedAt, &s.UpdatedAt); err != nil {
			log.Printf("Failed to scan shop row: %v", err)
			continue
		}
		shops = append(shops, s)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return shops, nil
}
