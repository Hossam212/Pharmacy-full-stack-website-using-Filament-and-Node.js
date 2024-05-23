import React, { useState } from "react";
import axios from "axios";
import "../css/styleNatours.css";
import Header from "../components/Header.jsx";

const DiabetesPrediction = () => {
    const [formData, setFormData] = useState({
        gender: "",
        age: "",
        hypertension: "",
        heart_disease: "",
        smoking_history: "",
        bmi: "",
        HbA1c_level: "",
        blood_glucose_level: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert formData to correct data types
        const payload = {
            gender: formData.gender,
            age: Number(formData.age),
            hypertension: Number(formData.hypertension),
            heart_disease: Number(formData.heart_disease),
            smoking_history: formData.smoking_history,
            bmi: Number(formData.bmi),
            HbA1c_level: Number(formData.HbA1c_level),
            blood_glucose_level: Number(formData.blood_glucose_level),
        };

        try {
            const response = await axios.post(
                "https://flask-diabetes-ai.onrender.com/predict",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            alert(`Prediction: ${response.data.prediction}`);
        } catch (error) {
            console.error(error);
            alert("An error occurred while making the prediction.");
        }
    };

    return (
        <>
            <Header />;
            <main className="main">
                <div className="login-form">
                    <h2 className="heading-secondary ma-bt-lg">
                        Diabetes AI Prediction
                    </h2>
                    <form className="form form--login" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <label className="form__label">Gender</label>
                            <input
                                className="form__input"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required="required"
                            />
                        </div>
                        <div className="form__group">
                            <label className="form__label">Age:</label>
                            <input
                                className="form__input"
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__group">
                            <label className="form__label">Hypertension:</label>
                            <select
                                className="form__input"
                                name="hypertension"
                                value={formData.hypertension}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label className="form__label">
                                Heart Disease:
                            </label>
                            <select
                                className="form__input"
                                name="heart_disease"
                                value={formData.heart_disease}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label className="form__label">
                                Smoking History:
                            </label>
                            <select
                                className="form__input"
                                name="smoking_history"
                                value={formData.smoking_history}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="never">Never</option>
                                <option value="formerly">Formerly</option>
                                <option value="current">Current</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label className="form__label">BMI:</label>
                            <input
                                className="form__input"
                                type="number"
                                name="bmi"
                                step="0.01"
                                value={formData.bmi}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__group">
                            <label className="form__label">HbA1c Level:</label>
                            <input
                                className="form__input"
                                type="number"
                                name="HbA1c_level"
                                step="0.1"
                                value={formData.HbA1c_level}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__group">
                            <label className="form__label">
                                Blood Glucose Level:
                            </label>
                            <input
                                className="form__input"
                                type="number"
                                name="blood_glucose_level"
                                value={formData.blood_glucose_level}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__group">
                            <button
                                className="btn btn--green"
                                id="submit"
                                type="submit"
                            >
                                Predict
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default DiabetesPrediction;
