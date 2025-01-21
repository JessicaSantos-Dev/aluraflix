import React, { useState } from "react";
import styles from "./ModalEdit.module.css";

function ModalEdit({ video, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    titulo: video.titulo,
    urlCapa: video.urlCapa,
    categoria: video.categoria,
    link: video.link,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.titulo ||
      !formData.urlCapa ||
      !formData.categoria ||
      !formData.link
    ) {
      alert("Todos os campos precisam ser preenchidos.");
      return;
    }

    const hasChanges = Object.keys(formData).some(
      (key) => formData[key] !== video[key]
    );

    if (hasChanges) {
      const updatedVideo = { ...video, ...formData };
      onUpdate(updatedVideo);
    } else {
      alert("Não há alterações para salvar.");
    }
  };

  const handleClear = () => {
    setFormData({
      titulo: "",
      urlCapa: "",
      categoria: "",
      link: "",
    });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Editar Vídeo</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
            />
          </label>
          <label>
            URL da Capa:
            <input
              type="text"
              name="urlCapa"
              value={formData.urlCapa}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Categoria:
            <input
              type="text"
              name="categoria"
              value={formData.categoria}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Link:
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Salvar</button>
          <button type="button" onClick={handleClear}>
            Limpar
          </button>
          <button type="button" onClick={onClose}>
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalEdit;
