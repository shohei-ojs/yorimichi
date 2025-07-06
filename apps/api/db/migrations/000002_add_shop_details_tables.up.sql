-- カテゴリテーブルを作成
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

-- 初期カテゴリデータを投入
INSERT INTO categories (name) VALUES
('居酒屋'),
('バー'),
('中華'),
('イタリアン'),
('立ち飲み'),
('焼鳥'),
('海鮮'),
('ラーメン');

-- お店とカテゴリを繋ぐ中間テーブルを作成
CREATE TABLE shop_categories (
    shop_id UUID NOT NULL REFERENCES shops(id) ON DELETE CASCADE,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (shop_id, category_id)
);

-- 営業時間テーブルを作成
CREATE TABLE opening_hours (
    id SERIAL PRIMARY KEY,
    shop_id UUID NOT NULL REFERENCES shops(id) ON DELETE CASCADE,
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0:日曜, 1:月曜, ..., 6:土曜
    open_time TIME NOT NULL,
    close_time TIME NOT NULL
);