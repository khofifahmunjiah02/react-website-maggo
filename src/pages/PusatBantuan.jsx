import React, { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import User from "../assets/img/icon/user.png"

const RuangTanya = () => {
    const [isFormVisible, setIsFormVisible] = useState(true);
    const formRef = useRef(null);

    const CloseForm = () => {
        setIsFormVisible(false);
    };

    return (
        <div className="overlay-container">
            <div className="help-form">
                <button className="back-button" onClick={() => window.history.back()}>Back</button>
                <h2>Ruang <span>Tanya</span></h2>
                <p>Jam Operasional: Senin - Jumat, pukul 09.00 - 18.00</p>

                <form>
                    <label>Nama Lengkap</label>
                    <div className="input-icon-container">
                        <input type="text" placeholder="" />
                        <img src={User} alt="User Icon" className="icon" />
                    </div>

                    <label>Email</label>
                    <input type="email" placeholder="" />

                    <label>Perihal Pertanyaan</label>
                    <input type="text" placeholder="" />

                    <label>Dokumen Pendukung (Jika Ada)</label>
                    <input type="file" />

                    <button type="submit" className="submit-button">Kirim Pertanyaan</button>
                </form>
            </div>
        </div>
    );
};

export default RuangTanya;