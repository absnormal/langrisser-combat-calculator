function terrain(terrain){
    switch(terrain){
	    case "柵欄":
	        return 0.05; break;
        case "山地":
            return 0.1; break;
        case "樹林":
            return 0.2; break;
        case "城牆":
	        return 0.3; break;
	    default:
	        return 0.0;
    }
};

