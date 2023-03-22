import Inputmask from "inputmask";

export default function masks() {
    Inputmask({'mask': "+ 7 (9 9 9) 9 9 9 - 9 9 - 9 9", showMaskOnFocus: false, showMaskOnHover: false}).mask('[data-placeholder-phone]');
    Inputmask({'alias': 'email', showMaskOnFocus: false, showMaskOnHover: false}).mask('[data-placeholder-email]');
}