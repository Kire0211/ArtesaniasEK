create database if not exists artesanias_db;
use artesanias_db;
select * from usuarios;
select * from artesanias;
-- Artesanias Table Insert Statements
INSERT INTO artesanias (artesano, categoria, descripcion, Imagen, titulo, valor) VALUES 
('María Rodríguez', 'Ceramica', 'Jarrón tradicional hecho a mano con técnicas ancestrales', 'jarron.jpg', 'Jarrón Azul Colonial', 150.50),
('Juan Pérez', 'Textil', 'Bufanda tejida con lana de alpaca de los Andes', 'bufanda.jpg', 'Bufanda Andina', 85.75),
('Carlos Gómez', 'Madera', 'Figura tallada de un caballo en madera de cedro', 'caballo_madera.jpg', 'Caballo Tallado', 120.00),
('Ana Martínez', 'Joyería', 'Collar de plata con diseño de símbolo inca', 'collar_inca.jpg', 'Collar de Plata Ancestral', 200.25),
('Luis Fernández', 'Ceramica', 'Set de tazas de cerámica con pintura tradicional', 'tazas_ceramica.jpg', 'Set de Tazas Decorativas', 95.50),
('Isabel Sánchez', 'Textil', 'Poncho tejido con lana de oveja y diseños tradicionales', 'poncho.jpg', 'Poncho Multicolor', 175.00),
('Roberto Díaz', 'Madera', 'Máscara ceremonial tallada en madera de roble', 'mascara_madera.jpg', 'Máscara Ceremonial', 250.75),
('Elena López', 'Joyería', 'Aretes de cobre con diseño de flor', 'aretes_cobre.jpg', 'Aretes Florales de Cobre', 65.25),
('Miguel Hernández', 'Ceramica', 'Plato decorativo con pintura folklórica', 'plato_ceramica.jpg', 'Plato Folklórico', 110.00),
('Sofía Torres', 'Textil', 'Bolso tejido a mano con técnicas tradicionales', 'bolso_tejido.jpg', 'Bolso Artesanal', 135.50);
-- Pagos Table Insert Statements

-- First, insert records into Pedidos
INSERT INTO Pedidos (estado, fecha, total, usuario_id) VALUES 
('Completado', '2024-02-15', 150.50, 1),
('En Proceso', '2024-02-16', 85.75, 2),
('Pendiente', '2024-02-17', 120.00, 3),
('Completado', '2024-02-18', 200.25, 4),
('Cancelado', '2024-02-19', 95.50, 5),
('En Proceso', '2024-02-20', 175.00, 6),
('Pendiente', '2024-02-21', 250.75, 7),
('Completado', '2024-02-22', 65.25, 8),
('Cancelado', '2024-02-23', 110.00, 9),
('En Proceso', '2024-02-24', 135.50, 10);

-- Then insert the Pagos
INSERT INTO Pagos (estado, fecha_pago, metodo_pago, monto, pedido_id) VALUES 
('Exitoso', '2024-02-15', 'Tarjeta de Crédito', 150.50, 1),
('Exitoso', '2024-02-16', 'PayPal', 85.75, 2),
('Pendiente', '2024-02-17', 'Transferencia Bancaria', 120.00, 3),
('Exitoso', '2024-02-18', 'Tarjeta de Débito', 200.25, 4),
('Fallido', '2024-02-19', 'Efectivo', 95.50, 5),
('Exitoso', '2024-02-20', 'Tarjeta de Crédito', 175.00, 6),
('Pendiente', '2024-02-21', 'PayPal', 250.75, 7),
('Exitoso', '2024-02-22', 'Transferencia Bancaria', 65.25, 8),
('Fallido', '2024-02-23', 'Tarjeta de Débito', 110.00, 9),
('Exitoso', '2024-02-24', 'Efectivo', 135.50, 10);