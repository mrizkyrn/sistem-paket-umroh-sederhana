import React, { useState } from 'react';
import {
  periode,
  vendor,
  pesawat,
  madinah,
  makkah,
  visaBus,
  transportasi,
  muthawwif,
  handlingSaudi,
  domestik,
  siskopatuh,
  perlengkapan,
  wisataPlus,
  manasik,
} from '../data';
import TotalPrice from './TotalPrice';
import { FormData } from '../types';
import Summary from './Summary';
import { product } from '../data/db';

const ProductForm: React.FC = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    periode: '',
    berangkat: '',
    vendorHotel: '',
    jumlahPax: 1,
    pesawat: '',
    madinah: '',
    hariMadinah: 0,
    makkah: '',
    hariMakkah: 0,
    visaBus: '',
    transportasi: '',
    muthawwif: '',
    handlingSaudi: '',
    domestik: '',
    siskopatuh: '',
    perlengkapan: '',
    wisataPlus: '',
    manasik: '',
    tourLeader: 0,
    margin: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePeriodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, berangkat: '' });
  };

  const getSelectedPeriode = () => {
    return periode.find((p) => p.option === formData.periode);
  };

  const getMadinahOptions = () => {
    if (formData.vendorHotel) {
      return madinah[formData.vendorHotel] || [];
    }
    return [];
  };

  const getMakkahOptions = () => {
    if (formData.vendorHotel) {
      return makkah[formData.vendorHotel] || [];
    }
    return [];
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleSubmit = () => {
    const dataObject = {
      ...formData,
      totalPrice: 0,
    };
    product.push(dataObject);
    setFormData({
      periode: '',
      berangkat: '',
      vendorHotel: '',
      jumlahPax: 1,
      pesawat: '',
      madinah: '',
      hariMadinah: 0,
      makkah: '',
      hariMakkah: 0,
      visaBus: '',
      transportasi: '',
      muthawwif: '',
      handlingSaudi: '',
      domestik: '',
      siskopatuh: '',
      perlengkapan: '',
      wisataPlus: '',
      manasik: '',
      tourLeader: 0,
      margin: 0,
    });
    
    alert('Data berhasil disimpan');
    setShowSummary(false);
  };

  return (
    <div>
      <form onSubmit={handleContinue} className="p-6 bg-white rounded shadow-md w-[800px]">
        <div className="flex flex-col md:flex-row gap-5 mb-10 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            {/* Periode */}
            <div className="flex flex-col">
              <label htmlFor="periode" className="text-sm font-medium">
                PERIODE
              </label>
              <select
                name="periode"
                id="periode"
                value={formData.periode}
                required
                onChange={handlePeriodeChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Periode
                </option>
                {periode.map((periode, index) => (
                  <option key={index} value={periode.option}>
                    {periode.option}
                  </option>
                ))}
              </select>
            </div>

            {/* Berangkat */}
            <div className="flex flex-col">
              <label htmlFor="berangkat" className="text-sm font-medium">
                BERANGKAT
              </label>
              <input
                type="date"
                name="berangkat"
                id="berangkat"
                value={formData.berangkat}
                required
                onChange={handleChange}
                disabled={!formData.periode}
                min={getSelectedPeriode()?.startDate}
                max={getSelectedPeriode()?.endDate}
                className="mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Vendor Hotel */}
            <div className="flex flex-col">
              <label htmlFor="vendorHotel" className="text-sm font-medium">
                VENDOR HOTEL
              </label>
              <select
                name="vendorHotel"
                id="vendorHotel"
                value={formData.vendorHotel}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Vendor Hotel
                </option>
                {vendor.map((vendor, index) => (
                  <option key={index} value={vendor}>
                    {vendor}
                  </option>
                ))}
              </select>
            </div>

            {/* Jumlah Pax */}
            <div className="flex flex-col">
              <label htmlFor="jumlahPax" className="text-sm font-medium">
                JUMLAH PAX
              </label>
              <input
                type="number"
                name="jumlahPax"
                id="jumlahPax"
                min={1}
                value={formData.jumlahPax}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Pesawat */}
            <div className="flex flex-col">
              <label htmlFor="pesawat" className="text-sm font-medium">
                PESAWAT
              </label>
              <select
                name="pesawat"
                id="pesawat"
                value={formData.pesawat}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Pesawat
                </option>
                {pesawat.map((pesawat, index) => (
                  <option key={index} value={pesawat.option}>
                    {pesawat.option} - Rp{pesawat.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Madinah */}
            <div className="flex w-full gap-3">
              <div className="w-3/4 flex flex-col flex-1">
                <label htmlFor="madinah" className="text-sm font-medium">
                  MADINAH
                </label>
                <select
                  name="madinah"
                  id="madinah"
                  value={formData.madinah}
                  required
                  onChange={handleChange}
                  disabled={!formData.vendorHotel}
                  className="mt-1 p-2 border rounded-md"
                >
                  <option value="" disabled>
                    Pilih Madinah
                  </option>
                  {getMadinahOptions().flatMap((option, index) => [
                    <option key={`${index}-Q`} value={`${option.option}-Q`}>
                      {option.option} (Quad) - Rp{option.prices.Q.toLocaleString()}
                    </option>,
                    <option key={`${index}-T`} value={`${option.option}-T`}>
                      {option.option} (Triple) - Rp{option.prices.T.toLocaleString()}
                    </option>,
                    <option key={`${index}-D`} value={`${option.option}-D`}>
                      {option.option} (Double) - Rp{option.prices.D.toLocaleString()}
                    </option>,
                  ])}
                </select>
              </div>

              <div className="w-1/4 flex flex-col">
                <label htmlFor="hariMadinah" className="text-sm font-medium">
                  HARI
                </label>
                <input
                  type="number"
                  name="hariMadinah"
                  id="hariMadinah"
                  min={0}
                  value={formData.hariMadinah}
                  required
                  onChange={handleChange}
                  disabled={!formData.madinah}
                  className="mt-1 p-2 border rounded-md"
                />
              </div>
            </div>

            {/* Makkah */}
            <div className="flex w-full gap-3">
              <div className="w-3/4 flex flex-col flex-1">
                <label htmlFor="makkah" className="text-sm font-medium">
                  MAKKAH
                </label>
                <select
                  name="makkah"
                  id="makkah"
                  value={formData.makkah}
                  required
                  onChange={handleChange}
                  disabled={!formData.vendorHotel}
                  className="mt-1 p-2 border rounded-md"
                >
                  <option value="" disabled>
                    Pilih Makkah
                  </option>
                  {getMakkahOptions().flatMap((option, index) => [
                    <option key={`${index}-Q`} value={`${option.option}-Q`}>
                      {option.option} (Quad) - Rp{option.prices.Q.toLocaleString()}
                    </option>,
                    <option key={`${index}-T`} value={`${option.option}-T`}>
                      {option.option} (Triple) - Rp{option.prices.T.toLocaleString()}
                    </option>,
                    <option key={`${index}-D`} value={`${option.option}-D`}>
                      {option.option} (Double) - Rp{option.prices.D.toLocaleString()}
                    </option>,
                  ])}
                </select>
              </div>

              <div className="w-1/4 flex flex-col">
                <label htmlFor="hariMakkah" className="text-sm font-medium">
                  HARI
                </label>
                <input
                  type="number"
                  name="hariMakkah"
                  id="hariMakkah"
                  min={0}
                  value={formData.hariMakkah}
                  required
                  onChange={handleChange}
                  disabled={!formData.makkah}
                  className="mt-1 p-2 border rounded-md"
                />
              </div>
            </div>

            {/* Visa & Bus */}
            <div className="flex flex-col">
              <label htmlFor="visaBus" className="text-sm font-medium">
                VISA & BUS
              </label>
              <select
                name="visaBus"
                id="visaBus"
                value={formData.visaBus}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Visa & Bus
                </option>
                {visaBus.map((visaBus, index) => (
                  <option key={index} value={visaBus.option}>
                    {visaBus.option} - Rp{visaBus.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Transportasi */}
            <div className="flex flex-col">
              <label htmlFor="transportasi" className="text-sm font-medium">
                TRANSPORTASI
              </label>
              <select
                name="transportasi"
                id="transportasi"
                value={formData.transportasi}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Transportasi
                </option>
                {transportasi.map((transportasi, index) => (
                  <option key={index} value={transportasi.option}>
                    {transportasi.option} - Rp{transportasi.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-3">
            {/* Muthawwif */}
            <div className="flex flex-col">
              <label htmlFor="muthawwif" className="text-sm font-medium">
                MUTHAWWIF
              </label>
              <select
                name="muthawwif"
                id="muthawwif"
                value={formData.muthawwif}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Muthawwif
                </option>
                {muthawwif.map((muthawwif, index) => (
                  <option key={index} value={muthawwif.option}>
                    {muthawwif.option} - Rp{muthawwif.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Handling Saudi */}
            <div className="flex flex-col">
              <label htmlFor="handlingSaudi" className="text-sm font-medium">
                HANDLING SAUDI
              </label>
              <select
                name="handlingSaudi"
                id="handlingSaudi"
                value={formData.handlingSaudi}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Handling Saudi
                </option>
                {handlingSaudi.map((handlingSaudi, index) => (
                  <option key={index} value={handlingSaudi.option}>
                    {handlingSaudi.option} - Rp{handlingSaudi.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Domestik */}
            <div className="flex flex-col">
              <label htmlFor="domestik" className="text-sm font-medium">
                DOMESTIK
              </label>
              <select
                name="domestik"
                id="domestik"
                value={formData.domestik}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Domestik
                </option>
                {domestik.map((domestik, index) => (
                  <option key={index} value={domestik.option}>
                    {domestik.option} - Rp{domestik.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Siskopatuh */}
            <div className="flex flex-col">
              <label htmlFor="siskopatuh" className="text-sm font-medium">
                SISKOPATUH
              </label>
              <select
                name="siskopatuh"
                id="siskopatuh"
                value={formData.siskopatuh}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Siskopatuh
                </option>
                {siskopatuh.map((siskopatuh, index) => (
                  <option key={index} value={siskopatuh.option}>
                    {siskopatuh.option} - Rp{siskopatuh.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Perlengkapan */}
            <div className="flex flex-col">
              <label htmlFor="perlengkapan" className="text-sm font-medium">
                PERLENGKAPAN
              </label>
              <select
                name="perlengkapan"
                id="perlengkapan"
                value={formData.perlengkapan}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Perlengkapan
                </option>
                {perlengkapan.map((perlengkapan, index) => (
                  <option key={index} value={perlengkapan.option}>
                    {perlengkapan.option} - Rp{perlengkapan.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Wisata Plus */}
            <div className="flex flex-col">
              <label htmlFor="wisataPlus" className="text-sm font-medium">
                WISATA PLUS
              </label>
              <select
                name="wisataPlus"
                id="wisataPlus"
                value={formData.wisataPlus}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Wisata Plus
                </option>
                {wisataPlus.map((wisataPlus, index) => (
                  <option key={index} value={wisataPlus.option}>
                    {wisataPlus.option} - Rp{wisataPlus.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Manasik */}
            <div className="flex flex-col">
              <label htmlFor="manasik" className="text-sm font-medium">
                MANASIK
              </label>
              <select
                name="manasik"
                id="manasik"
                value={formData.manasik}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Pilih Manasik
                </option>
                {manasik.map((manasik, index) => (
                  <option key={index} value={manasik.option}>
                    {manasik.option} - Rp{manasik.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Tour Leader */}
            <div className="flex flex-col">
              <label htmlFor="tourLeader" className="text-sm font-medium">
                TOUR LEADER
              </label>
              <input
                type="number"
                name="tourLeader"
                id="tourLeader"
                min={0}
                value={formData.tourLeader}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Margin */}
            <div className="flex flex-col">
              <label htmlFor="margin" className="text-sm font-medium">
                MARGIN
              </label>
              <input
                type="number"
                name="margin"
                id="margin"
                min={0}
                value={formData.margin}
                required
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        <TotalPrice formData={formData} />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-5">
          Lanjutkan
        </button>
      </form>

      {showSummary && (
        <Summary formData={formData} onCancel={() => setShowSummary(false)} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default ProductForm;
