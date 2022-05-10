import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Daily = () => {
  return (
    <section className="w-full h-96 flex flex-col justify-center bg-daily bg-center bg-fixed items-center">
      <h3 className="text-white text-4xl">Daily note information</h3>
      <h4 className="text-white text-3xl">Daily note</h4>
    </section>
  );
};

export default Daily;
