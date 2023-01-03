import * as React from 'react';
import { ModalFooter } from './types';

const ModalFooter = (props: ModalFooter) => {
  return (
    <>
      <div className="flex items-center justify-center rounded-b border-t border-solid border-slate-200 p-6">
        <button
          className=" mr-1 mb-1 rounded bg-[#ffc762] px-6 py-3 text-sm font-bold uppercase text-[#00917a] shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-[#ffc762]"
          type="button"
          onClick={() => {
            props.setShowModal(false);
            window.location.replace('/');
          }}
        >
          HOME
        </button>
      </div>
    </>
  );
};

export default ModalFooter;
