public static void main(String[] args) {
    try {
        System.out.println(run(args));
    } catch (Exception e) {
        System.err.println(e);
        System.exit(1);
    }
}

private static long run(String[] args) throws IOException{
    return countOrder(parseCommendLine(args));
}

private static long countOrder(CommendLine commendLine) throws IOException {
    File input = Paths.get(commendLine.filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commendLine.onlyCountReady)
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else
        return orders.length;
}

private static CommendLine parseCommendLine(String[] args) {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommendLine result = new CommendLine(args);
    this.filename = args[args.length -1]
    this.onlyCountReady = onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
    return result;
}

private static class CommendLine {
    String filename;
    boolean onlyCountReady;
}