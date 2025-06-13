// apps/api/main.go
package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"github.com/shohei-ojs/yorimichi/apps/api/database"
	"github.com/shohei-ojs/yorimichi/apps/api/handler"
)

func main() {
	db := database.Connect()

	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"}, // frontend URL
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	shopHandler := &handler.ShopHandler{DB: db}

	v1 := e.Group("/api/v1")
	v1.GET("/shops", shopHandler.ListShops)

	e.GET("/api/health", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"status": "healthy",
		})
	})

	e.Logger.Fatal(e.Start(":8080")) // Start the server on port 8080
}
