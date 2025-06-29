import { useState } from 'react';
import axios from 'axios';
import './style.scss'
import { BASE_URL } from '../../conf/store';

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('quantity', formData.quantity);
    data.append('category', formData.category);
    data.append('image', formData.image); // файл!

    try {
      const response = await axios.post(`${BASE_URL}/api/foods/`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Продукт успешно создан!');
      console.log(response.data);
    } catch (error) {
      console.error('Ошибка при создании продукта:', error);
      alert('Ошибка при создании продукта');
    }
  };

  return (
    // <div className='create-product'>
    //     <h2>Создать продукт</h2>
    //   <form onSubmit={handleSubmit} encType="multipart/form-data">

    //     <input name="name" placeholder="Название" onChange={handleChange} required />
    //     <input name="price" type="number" placeholder="Цена" onChange={handleChange} required />
    //     <input name="quantity" type="number" placeholder="Количество" onChange={handleChange} required />
    //     <input name="category" placeholder="Категория" onChange={handleChange} required />
    //     <input name="image" type="file" accept="image/*" onChange={handleChange} required />

    //     <button type="submit">Отправить</button>
    //   </form>
    // </div>
    <div className="create-product-dark">
      <h2>Добавить блюдо в меню</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="form-group">
          <label>Название блюда</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Цена (₽)</label>
          <input type="number" name="price" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Категория</label>
          <select name="category" onChange={handleChange} required>
            <option value="">Выберите...</option>
            <option value="Завтраки">Завтраки</option>
            <option value="Горячее">Горячее</option>
            <option value="Горячее">Фрукты</option>
            <option value="Напитки">Напитки</option>
            <option value="Десерты">Десерты</option>
          </select>
        </div>

        <div className="form-group">
          <label>Количество</label>
          <input type="number" name="quantity" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Изображение</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        </div>

        <button className="submit-btn">Добавить блюдо</button>
      </form>
    </div>

  );
}

export default CreateProduct;
