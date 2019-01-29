class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        this._displayCaclEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl =  document.querySelector("#hora");
        this._currentDate;

        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDIsplayTime()

        setInterval(() => {

            this.setDIsplayTime()

        }, 1000);


    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        })
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll('#buttons > g, #parts > g')

        buttons.forEach((btn, index) => {
            
           this.addEventListenerAll(btn, 'click drag', e => {
               console.log(btn.className.baseVal.replace('btn-', ''));
           })

           this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer';
            })

        });

    }

    setDIsplayTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    get displayCalc (){
        return this._displayCaclEl.innerHTML;
    }

    set displayCalc (value){
        this._displayCaclEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return  this._dateEl.innerHTML;
    }

    set displayDate(value) {
         this._dateEl.innerHTML = value;
    }

    get currentDate(){
        return new Date()
    }

    set currentDate(value){
        this._currentDate = value
    }

}