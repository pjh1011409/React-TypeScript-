import * as React from 'react';
import { Link } from 'react-router-dom';
import { ModalFooter } from './types';

const ModalFooter = (props: ModalFooter) => {
  return (
    <>
      <div className="flex items-center justify-center rounded-b border-t border-solid border-slate-200 p-6">
        <button
          className="mx-5 mr-1 mb-1 rounded bg-[#00917a] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-[#00917a]"
          type="button"
          onClick={() => props.setShowModal(false)}
        >
          <Link to="/"> HOME</Link>
        </button>
      </div>
    </>
  );
};

export default ModalFooter;
