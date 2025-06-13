package handler

import (
	"database/sql"
	"net/http"

	"github.com/labstack/echo/v4"

	"github.com/shohei-ojs/yorimichi/apps/api/models"
	"github.com/shohei-ojs/yorimichi/apps/api/repository"
)

type ShopHandler struct {
	DB *sql.DB
}

// ListShops はお店の一覧をJSONで返します
func (h *ShopHandler) ListShops(c echo.Context) error {
	shops, err := repository.ListShops(h.DB)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to fetch shops"})
	}

	// もしお店が一件もなくても、エラーではなく空の配列を返す
	if shops == nil {
		shops = []models.Shop{}
	}

	return c.JSON(http.StatusOK, shops)
}
