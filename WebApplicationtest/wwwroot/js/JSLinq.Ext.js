JSLINQ.fn.TakeWhile = function (clause) {
    for (var count = 0; count < this.items.length; count++) {
        var item = this.items[count];

        if (clause.call(item, item) === false) {
            return this.Take(count);
        }
    }

    return this;
};

JSLINQ.fn.ForEach = function (callback) {
    var i = 0;
    for (var value = this.items[0];
        i < this.items.length && callback.call(value, value, i) !== false;
        value = this.items[++i]) {

    }

    return this;
};

JSLINQ.fn.Sum= function (clause) {
    var values = this.Select(clause).ToArray();
   // console.info("---values", this);
    if (values != null) {
        var result = 0;

        for (var i = 0; i < values.length; i++) {
            var val = values[i];
            if (!isNaN(parseFloat(val)) && isFinite(val)) {
                result = result + parseInt(val);
            }
        }

        return result;
    } else {
        throw new Error("Argument Null Source");
    }
}

JSLINQ.fn.GroupBy = function (key) {
    var objectresult = {items:[]};

    var result= this.items.reduce(
        function (rv, x) {
        
        

        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
        }
        //
        , {});
  
    var instance = Object.getOwnPropertyNames(result)
    
    for (var i = 0; i < instance.length; i++) {
        var key = instance[i];
        var value = result[key];
    
        objectresult.items.push({Key: key,Value:value})
    }
    
    return objectresult;

};