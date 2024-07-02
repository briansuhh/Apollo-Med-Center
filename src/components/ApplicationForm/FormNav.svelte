<script>
    import { currentSection } from '../../store/applicationPart.js';

    function getButtonClass(sectionName) {
        return currentSection === sectionName ? 'buttonActive' : 'buttonDefault';
    }

    function showSect1() {
      currentSection.set('Section1');
      console.log('Section 1 Test');
    }
  
    function showSect2() {
      currentSection.set('Section2');
      console.log('Section 2 Test');
    }
  
    function showSect3() {
      currentSection.set('Section3');
      console.log('Section 3 Test');
    }
  
    function showSect4() {
      currentSection.set('Section4');
      console.log('Section 4 Test');
    }

    function nextField() {
      if ($currentSection === 'Section1') {
        showSect2()
      }
      else if ($currentSection === 'Section2') {
        showSect3()
      }
      else if ($currentSection === 'Section3') {
        showSect4()
      }
    }

    function prevField() {
      if ($currentSection === 'Section2') {
        showSect1()
      }
      else if ($currentSection === 'Section3') {
        showSect2()
      }
      else if ($currentSection === 'Section4') {
        showSect3()
      }
    }
  </script>
  
  <div class="sectNav">
    
    <div class="center-buttons">
        <button class="next" on:click={prevField}><i class="fa-solid fa-arrow-left"></i></button>
        <button class="nav-button {$currentSection === 'Section1' ? 'active' : ''}" on:click={showSect1}>Personal Information</button>
        <button class="nav-button {$currentSection === 'Section2' ? 'active' : ''}" on:click={showSect2}>Educational Background</button>
        <button class="nav-button {$currentSection === 'Section3' ? 'active' : ''}" on:click={showSect3}>Residency</button>
        <button class="nav-button {$currentSection === 'Section4' ? 'active' : ''}" on:click={showSect4}>Post Residency</button>
        <button class="next" on:click={nextField}><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <button class="submit"><i class="fa-solid fa-arrow-up-right-from-square"></i><p>Submit</p></button>
</div>


  <style>

.sectNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.center-buttons {
    display: flex;
    justify-content: center;
    flex-grow: 1;
}

.next {
    border-width: 0;
    font-size: 25px;
    margin-top: 20px;
    padding-left: 25px;
    padding-right: 25px;
}

.next i {
    border-width: 0;
    font-size: 25px;
    color: #6e7ba2;
}

.submit {
    display: flex;
    border-width: 0px;
    border-radius: 10px;
    border-color: #6e7ba2;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: 50px;
}

.submit:hover > i, .submit:hover > p{
    color: #333;
}

.submit p {
    font-size: 24px;
    margin-left: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
    color: #6e7ba2;
}

.submit i{
    border-width: 0;
    font-size: 25px;
    color: #6e7ba2;
}

.next i:hover {
    border-width: 0;
    font-size: 25px;
    color: #333;
}

.nav-button {
    padding: 10px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border-width: 3px;
    border-radius: 7px;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
    background-color: white;
    border: 2px solid transparent;
    color: #6e7ba2; 
    border-color: #6e7ba2; 
}

.nav-button.active {
    color: #333;
    border-color: #333;
}

.nav-button:hover {
  color: rgb(109, 109, 0);
  border-color: yellow;
}


  </style>
  
  