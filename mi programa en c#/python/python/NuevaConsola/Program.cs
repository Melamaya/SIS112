using System;
using System.Collections.Generic;
using System.IO;
using System.Numerics;

class Program
{
    public static void Main()
    {
        string inputDirectory = @"C:\Users\Lab05-14\Desktop\RECUPERATORIO SEGUNDO PARCIAL\Pregunta1";
        
        string outputDirectory = Path.Combine(inputDirectory, "Output");

        if (!Directory.Exists(outputDirectory))
        {
            Directory.CreateDirectory(outputDirectory);
        }

        foreach (string inputFilePath in Directory.GetFiles(inputDirectory, "datos*.txt"))
        {
            ProcessFile(inputFilePath, outputDirectory);
        }
    }

    public static void ProcessFile(string inputFilePath, string outputDirectory) 
    {
        string[] lines = File.ReadAllLines(inputFilePath);  
        if (lines.Length == 0) return; 

        int targetSum = int.Parse(lines[0]); 
        List<int> values = new List<int>();

        for (int i = 1; i < lines.Length; i++) 
        {
            if(int.TryParse(lines[i], out int value))
            {
                values.Add(value);
            }
        }

        bool result = SubSetSum(values.ToArray(), targetSum, out List<int> subset); 
        string outputFileName = "Output_" + Path.GetFileName(inputFilePath);

        string outputFilePath = Path.Combine(outputDirectory, outputFileName);


        // Resulado del archivo de salida
        using (StreamWriter writer = new StreamWriter (outputFilePath))
        {
            writer.WriteLine(result ? "True" : "False");
            if(result)
            {
                foreach (int num in subset)
                {
                    writer.WriteLine(num);
                }
            }
        }
    }



    public static bool SubSetSum(int[] S, int sum, out List<int> subset)
    {
        // Inicializar la lista de subconjunto
        int n = S.Length; 
        bool [,] dp = new bool [n + 1, sum + 1];
        subset = new List<int> ();

        for (int i = 0; i <= n; i++)
        {
            dp[i, 0] = true;
        }
        for (int j = 1; j <= sum; j++)
        {
            dp[0, j] = false;
        }


        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j <= sum; j++)
            {
                if (S[i - 1] > j)
                {
                    // Elemento > suma no se incluye
                    dp[i, j] = dp[i - 1, j];
                }
                else
                {
                    // elemento <= a la suma
                    // verificamos si podemos obtener la suma j incluyendo o no incluyendo el elemento actual
                    dp[i, j] = dp[i - 1, j] || dp[i - 1, j - S[i - 1]];
                }
            }
        }

        // Si no es posible alcanzar la suma objetivo, retornar false
        if (!dp[n, sum])
        {
            return false;
        }

        // Reconstruir el subconjunto usado para alcanzar la suma objetivo
        int w = sum;
        for (int i = n; i > 0 && w > 0; i--)
        {
            // Si el valor actual no puede ser alcanzado sin el elemento S[i-1], entonces S[i-1] es parte del subconjunto
            if (!dp[i - 1, w])
            {
                subset.Add(S[i - 1]);
                w -= S[i - 1];
            }
        }

        // Invertir el subconjunto para mantener el orden original de los elementos
        subset.Reverse();
        return true;
    }
}   