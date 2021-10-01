CREATE DATABASE IF NOT EXISTS products;

DROP TABLE IF EXISTS product CASCADE;
CREATE TABLE product (
 id INTEGER PRIMARY KEY,
 name VARCHAR(60),
 slogan VARCHAR(128),
 description VARCHAR(512),
 category VARCHAR(64),
 default_price INT,
 created_at TIMESTAMP DEFAULT Now(),
 updated_at TIMESTAMP DEFAULT Now()
);

DROP TABLE IF EXISTS styles CASCADE;
CREATE TABLE styles (
 id INTEGER PRIMARY KEY,
 product_id INTEGER REFERENCES product,
 name VARCHAR(64) ,
 sale_price INT,
 original_price INT,
 default_style INT
);

DROP TABLE IF EXISTS photos;
CREATE TABLE photos (
 id INTEGER PRIMARY KEY,
 style_id INTEGER REFERENCES styles,
 url VARCHAR,
 thumbnail_url VARCHAR
);

DROP TABLE IF EXISTS skus;
CREATE TABLE skus (
 id INTEGER PRIMARY KEY,
 style_id INTEGER REFERENCES styles,
 size VARCHAR(8),
 quantity SMALLINT
);

DROP TABLE IF EXISTS features;
CREATE TABLE features (
 id INTEGER PRIMARY KEY,
 product_id INTEGER REFERENCES product,
 feature VARCHAR(32),
 value VARCHAR(32)
);

DROP TABLE IF EXISTS characteristics;
CREATE TABLE characteristics (
 id INTEGER PRIMARY KEY,
 product_id INTEGER REFERENCES product,
 name VARCHAR(32)
);

DROP TABLE IF EXISTS related;
CREATE TABLE related (
 id INTEGER PRIMARY KEY,
 product_id INTEGER REFERENCES product,
 related_product_id INTEGER
);

COPY product(id, name, slogan, description, category, default_price)
FROM './__data__/product.csv'
CSV HEADER;

COPY styles(id, product_id, name, sale_price, original_price, default_style)
FROM './__data__/styles.csv'
NULL AS 'null'
CSV HEADER;

COPY photos(id, style_id, url, thumbnail_url)
FROM './__data__/photos.csv'
CSV HEADER;

COPY skus(id, style_id, size, quantity)
FROM './__data__/skus.csv'
CSV HEADER;

COPY features(id, product_id, feature, value)
FROM './__data__/features.csv'
CSV HEADER;

COPY characteristics(id, product_id, name)
FROM './__data__/characteristics.csv'
CSV HEADER;

COPY related(id, product_id, related_product_id)
FROM './__data__/related.csv' 
CSV HEADER;
