Save_Finished_Creation();

simulator__menu_measures_mobile();

LocalHost_Creations();

measures__display_past_simulations();

function simulator__menu_measures_mobile() {

    let QueryParams_categories = ['Model', 'Shoulder' , 'Style', 'Back','Fabric', 'Color'];
    let queryParams = new URLSearchParams(window.location.search);
    let _model = queryParams.get('model');
    let _color = queryParams.get('color');
    let _style = queryParams.get('style');
    let _shoulder = queryParams.get('shoulder');
    let _fabric = queryParams.get('fabric');
    let _back = queryParams.get('back');
    let _view = queryParams.get('view');
    let navigator_menu = "";

    for (let i = 0; i < 6; i++) {
        navigator_menu += `<div class="row mb-1 Row_white">
                                    <div class="col-2 m-auto">
                                        <a href="../../HTML/LADIES/DRESSES/Ladies_Dresses_Simulator.html" alt="Step ${i}" onclick="simulator__relocate_from_measures()">
                                            <img class="m-auto navigation__number" id="${QueryParams_categories[i]}_navigation_measures" src="../../IMAGES/SIMULATOR/NAVIGATOR/Nav_${i + 1}_filled.png" alt="${QueryParams_categories[i]}" />
                                        </a>
                                    </div>
                                    <div class="col-2 m-auto">
                                        <a href="../../HTML/LADIES/DRESSES/Ladies_Dresses_Simulator.html" alt="Step ${i}" onclick="simulator__relocate_from_measures()">
                                            <img class="m-auto navigation__modify" id="${QueryParams_categories[i]}_navigation_measures_modify" src="../../IMAGES/SIMULATOR/MEASURES/Modify.png" alt="${QueryParams_categories[i]}" />
                                        </a>
                                    </div>

                                    
                                    <div class="col-8 m-auto Measures_Previews_Div" id="simulator__measures_preview_${QueryParams_categories[i]}">
                                    </div>
                                </div>`;
    }

    document.getElementById('simulator__menu_measures_mobile').innerHTML = navigator_menu;

    let Simulator_preview_measures_simul = `<div class="Sticky_Position">
                                    <div id="simulator__window_color_measures" style="background-color:${_color}">

                                    </div>
                                    <div id="simulator__window_fabric_measures">
                                        <img class="full" src="../../IMAGES/LADIES/DRESSES/PREVIEWS/TEXTURE/${_fabric}.png" alt="fabric image"/>
                                    </div>

                                    <div class="simulator__animation-background" id="simulator__line0"></div>
                                    <div class="simulator__animation-background" id="simulator__line1"></div>
                                    <div class="simulator__animation-background" id="simulator__line2"></div>
                                    <div class="simulator__animation-background" id="simulator__line3"></div>
                                    <div class="simulator__animation-background" id="simulator__line4"></div>
                                    <div class="simulator__animation-background" id="simulator__line5"></div>
                                    <div class="simulator__animation-background" id="simulator__line6"></div>
                                    <div class="simulator__animation-background" id="simulator__line7"></div>
                                    <div class="simulator__animation-background" id="simulator__line8"></div>
                                    <div class="simulator__animation-background" id="simulator__line9"></div>
                                    <div class="simulator__animation-background" id="simulator__line10"></div>
                                    <div class="simulator__animation-background" id="simulator__line11"></div>
                                    <div class="simulator__animation-background" id="simulator__line12"></div>
                                    <div class="simulator__animation-background" id="simulator__line13"></div>
                                    <div class="simulator__animation-background" id="simulator__line14"></div>

                                    <div id="simulator__window_top"><img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/${_model}/Model_${_model}_Shoulder_${_shoulder}_preview.png" alt="Top image"/></div>
                                    <div id="simulator__window_bottom"><img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/${_model}/Model_${_model}_Style_${_style}_preview.png" alt="Bottom image"/></div>
                                </div>`



    document.getElementById('simulator__window_measures').innerHTML = Simulator_preview_measures_simul;

    simulator__preview_selection(_model, _shoulder, _style, _back, _fabric, _color);
}

//FUNCTION TO DISPLAY THE SPECIFIC PREVIEW OF EACH STEP

function simulator__preview_selection(_model, _shoulder, _style, _back, _fabric, _color) {
    document.getElementById('simulator__measures_preview_Model').innerHTML = `<img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/MODEL/Model_${_model}_preview.png" alt="back model image"/>`;
    document.getElementById('simulator__measures_preview_Shoulder').innerHTML = `<img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/${_model}/Model_${_model}_Shoulder_${_shoulder}_preview.png" alt="front cut image"/>`;
    document.getElementById('simulator__measures_preview_Style').innerHTML = `<img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/${_model}/Model_${_model}_Style_${_style}_preview.png" alt="front style image"/>`;
    document.getElementById('simulator__measures_preview_Back').innerHTML = `<img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/${_model}/Model_${_model}_Shoulder_${_shoulder}_preview.png" alt="front shoulders image"/>`;
    document.getElementById('simulator__measures_preview_Fabric').innerHTML = `<img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/TEXTURE/${_fabric}.png" alt="front sleeves image"/>`;
    document.getElementById('simulator__measures_preview_Color').innerHTML = `<div id="Measures__Preview_color" style="background-color:${_color}"></div>`;
}


// CREATE AN ARRAY FOR THE CURRENT PRODUCT IN ORDER TO ADD IT TO THE DATABASE

function Save_Finished_Creation() {
    let queryParams = new URLSearchParams(window.location.search);
    let _model_params = queryParams.get('model');
    let _color_params = queryParams.get('color');
    let _style_params = queryParams.get('style');
    let _shoulder_params = queryParams.get('shoulder');
    let _back_params = queryParams.get('back');
    let _fabric_params = queryParams.get('fabric');
    

    class Creation {
        constructor(model, style, shoulders, back, fabric, color) {
            this._model = model;
            this._style = style;
            this._shoulder = shoulders;
            this._back = back;
            this._fabric = fabric;
            this._color = color;
        }
        get model() {
            return this._model
        }
        set model(_model) {
            this._model = this.model
        }
       
        get style() {
            return this._style
        }
        set style(_style) {
            this._style = this.style
        }
        get shoulder() {
            return this._shoulder
        }
        set shoulder(_shoulder) {
            this._shoulder = this.shoulder
        }
        get back() {
            return this._back
        }
        set back(_back) {
            this._back = this.back
        }
        get fabric() {
            return this._fabric
        }
        set fabric(_fabric) {
            this._fabric = this.fabric
        }
        get color() {
            return this._color
        }
        set color(_color) {
            this._color = this.color
        }
    }

    let Current_creation=[];
    Current_creation.push(new Creation(_model_params, _style_params, _shoulder_params, _back_params, _fabric_params, _color_params));

    console.log(Current_creation);

    simulator__add_another_creation(Current_creation);

}

//FUNCTION ADD ANOTHER CREATION - REDIRECT & SAVE IN LOCALHOST

function simulator__add_another_creation(Current_creation) {


    console.log(Current_creation);

    
    var Creations = JSON.parse(window.localStorage.getItem('creations'));
    if (Creations === null) { var Creations = [] };

    console.log(Creations);

    Creations.push(Current_creation);
    
    window.localStorage.setItem('creations', JSON.stringify(Creations));
    
}




//VERIFIER QUE LOCALHOST A BIEN ENREGISTRE SANS CLIQUER SUR AUTRE SIMULATION

function LocalHost_Creations() {
    var Creations = JSON.parse(window.localStorage.getItem('creations'));
    console.log(Creations);
}









//FUNCTION ADD-EVENT-LISTENER








//FUNCTION DISPLAY EVENTUAL PAST SIMULATIONS

function measures__display_past_simulations() {
    let creations_display = JSON.parse(window.localStorage.getItem('creations'));

    if (creations_display === null) { creations_display = [] }

    if (creations_display.length > 0) {
        let previous_creations = "";
        for (let i = 0; i < creations_display.length; i++) {
            previous_creations += `<div class="simulator__window_previous" id="simulator__window_previous_${i}">
                                        <a href="#" onclick="remove_element_from_array(${i})" id="simulator__window_previous_delete_${i}" aria-label="delete"><img src="../../IMAGES/SIMULATOR/MEASURES/Delete_icon.png" alt="remove" class="remove_icon"/></a>
                                        <div class="Full_Preview_Past">
                                            <div class="simulator__window_top_Measures">
                                            <img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/${creations_display[i][0]._model}/Model_${creations_display[i][0]._model}_Shoulder_${creations_display[i][0]._shoulder}_preview.png" alt="Tailor's creation preview" class="previous_designs"/>
                                                </div>
                                            <div class="simulator__window_bottom_Measures">
                                                <img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/${creations_display[i][0]._model}/Model_${creations_display[i][0]._model}_Style_${creations_display[i][0]._style}_preview.png" alt="Tailor's creation preview" class="previous_designs"/>
                                            </div>
                                        </div>
                                   </div>`
        }

        document.getElementById('simulator__past_simulation').innerHTML = previous_creations;

    } else {
        document.getElementById('simulator__past_simulation').innerHTML = '';
    }
}



//FUNCTION TO CANCEL A PAST SIMULATION IF WANTED




function remove_element_from_array(value) {
    event.preventDefault();
    let creations_display = JSON.parse(window.localStorage.getItem('creations'));

    console.log(creations_display);

    document.getElementById('simulator__past_simulation').innerHTML = `<div class="row">
                                                                           <div class="col-5 col-sm-6">
                                                                                <div class="simulator__window_top">
                                                                                    <img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/${creations_display[value][0]._model}/Model_${creations_display[value][0]._model}_Shoulder_${creations_display[value][0]._shoulder}_preview.png" alt="Tailor's creation preview" class="previous_designs"/>
                                                                                </div>
                                                                                <div class="simulator__window_bottom">
                                                                                    <img src="../../IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/${creations_display[value][0]._model}/Model_${creations_display[value][0]._model}_Style_${creations_display[value][0]._style}_preview.png" alt="Tailor's creation preview" class="previous_designs"/>
                                                                                </div>
                                                                           </div>
                                                                           <div class="col-7 col-sm-6 m-auto text-center Previous_Simul">
                                                                                <img src="../../IMAGES/SIMULATOR/MEASURES/Sure_verification.png" alt="Remove tailoring item" id="sure_verification"/>
                                                                                <h3>You are about to remove this creation</h3>
                                                                                <p>The deletion will be definitive. You could as well decide to continue this creation later</p>
                                                                                <ul>
                                                                                <li><a href="#" onclick="confirm_remove_element_from_array(${value})" id="simulator__window_previous_delete_confirm" aria-label="delete">Delete this creation</a></li>
                                                                                <li><a href="#" onclick="save_element_from_array(${value})" id="simulator__window_previous_save" aria-label="save">Save for later</a></li>
                                                                                </ul>
                                                                            </div>
                                                                       </div>`;
}


function save_element_from_array(element) {
    alert('This path is not implemented - LADIES/measures.js');
}


function confirm_remove_element_from_array(value) {
    event.preventDefault();
    let creations_display = JSON.parse(window.localStorage.getItem('creations'));
    let removed_creations_display = creations_display.splice(value, 1);

    console.log(removed_creations_display);

    window.localStorage.setItem('creations', JSON.stringify(creations_display));
    measures__display_past_simulations();
}


//FUNCTION TO MAKE THE "HOW DO YOU WISH TO TAKE YOUR MEASURES APPEAR"

document.getElementById('measures__general-button').addEventListener('click', measures__display_options);
    

function measures__display_options() {
    event.preventDefault();
    document.getElementById('measures__general-section').innerHTML = `<h2 class="text-center pt-5 pb-4">How do you wish to take your measures?</h2>
                                                                     <div class="row section__grey mb-3" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="400" data-aos-duration="1500">
                                                                           <div class="col-md-6">
                                                                                <img src="../../IMAGES/HOME/Tailor.jpg" alt="Tailor's appointment" class="fit"/>
                                                                           </div>
                                                                           <div class="col-md-6 text-center">
                                                                                <h3>Take an appointment with the tailor</h3>
                                                                                <p class="pt-4 mb-5 text-justify">You will have the chance to settle a video-appointment with ne of our tailor in order to finalize your creation. Please make sure to cancel your appointment at least 24h ahead if you wish to rescheddule it.</p>
                                                                                <a href="../../HTML/LADIES/Appointment.html" class="button mb-5">See the availibilities</a>
                                                                            </div>
                                                                       </div>
                                                                       <div class="row section__grey mb-3" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="400" data-aos-duration="1500">
                                                                           <div class="col-md-6 text-center">
                                                                                <h3>Take my measures online</h3>
                                                                                <p class="pt-4 mb-5 text-justify">You will have the chance to settle a video-appointment with ne of our tailor in order to finalize your creation. Please make sure to cancel your appointment at least 24h ahead if you wish to rescheddule it.</p>
                                                                                <a href="../../HTML/LADIES/measures_online.html" class="button mb-5">Start taking my measures</a>
                                                                            </div>
                                                                           <div class="col-md-6">
                                                                                <img src="../../IMAGES/HOME/Tailor.jpg" alt="Tailor's appointment" class="fit"/>
                                                                           </div>
                                                                       </div>`;
    
}


function simulator__relocate_from_measures() {
    event.preventDefault();
    let queryParams = new URLSearchParams(window.location.search);
    window.location.replace("../../HTML/LADIES/DRESSES/Ladies_Dresses_Simulator.html" + "?" + queryParams.toString());
}



User_logged();

function User_logged() {
    let token = JSON.parse(window.localStorage.getItem('token'));
    if (token === null || token === {}) {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        document.getElementById('Online_Measures').innerHTML = `<a href="#" onclick="Login_Menu()" class="button">Login</a>`
    } else {
        document.getElementById('Online_Measures').innerHTML = `<a href="../../HTML/DASHBOARD/Dashboard.html" class="button">Use my measures</a>`
    }
}
