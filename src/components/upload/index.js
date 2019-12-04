import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import { MdAddAPhoto } from "react-icons/md";
//import api from "~/services/api";

import { Container } from "./styles";

export default function InputBanner() {
  const { defaultValue, registerField } = useField("banner_id");
  const { error } = useField("banner_id");

  const ref = useRef();
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "banner_id",
        ref: ref.current,
        path: "dataset.file"
      });
    }
    // eslint-disable-next-line
  }, [ref]);

  async function handleChange(e) {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    // aqui tem que colocar a requesicao pra rota da apu de voces
    //const response = await api.post("files", data);

    // a api de voces é pra retornar o id e a url dentro do data
    //const { id, url } = response.data;
    const url = URL.createObjectURL(e.target.files[0]);

    //setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview && <img src={preview} alt="Banner" />}

        {!preview && (
          <div>
            <MdAddAPhoto size={48} color="#fff" />

            <span>Selecionar imagem</span>
          </div>
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
          className="img-fluid"
          alt="Responsive image"
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}