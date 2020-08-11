export default function Timer(){
    this._time=null;
    this._dateStart=null;
    this._active=false;
}
    

    Timer.prototype.start=function(ms){
        this._time=ms;
        this._dateStart=new Date();
        this._active=true;
        return this._dateStart;

    }

    Timer.prototype.stop=function(){

        if(this._dateStart){
            this._dateStart=null;
            this._active=false;
            return true;
        }
        else{
            return false;
        }

    }
    
    Timer.prototype.isActive=function(){
        const delta=(new Date)-this._dateStart;
        if(this._active && delta<=this._time){
            return true
        }
        else{
            this._active=false;
            return false
        }
    }

    Timer.prototype.remaining=function(){
        console.log(this)
      if(this.isActive()){
          console.log(this.isActive())
          return this._time-((new Date)-this._dateStart);
      }
      else {return null}

    }

    Timer.prototype.elapsed=function(){
        console.log(this)
      if(this.isActive()){
          console.log(this.isActive())
          return (new Date)-this._dateStart;
      }
      else {return null}

    }



